<?php

/**
 * Database Configuration
 */

class Database
{
    private $host;
    private $db_name;
    private $username;
    private $password;
    private $port;
    private $conn;

    public function __construct()
    {
        // Load environment variables from multiple sources
        $env = file_exists(__DIR__ . '/.env') ? parse_ini_file(__DIR__ . '/.env') : [];

        // UNIVERSAL PLATFORM SUPPORT - Works with ANY hosting platform
        // Priority: System ENV > .env file > defaults
        // Supports: Railway (MYSQL_*), xCloud, cPanel, Heroku, DigitalOcean, AWS, etc.

        $this->host = $this->getEnvValue([
            'MYSQL_HOST',
            'DB_HOST',
            'DATABASE_HOST',
            'CLEARDB_DATABASE_URL_HOST'
        ], $env, 'http://127.0.0.1:4173/');

        $this->db_name = $this->getEnvValue([
            'MYSQL_DATABASE',
            'DB_NAME',
            'DATABASE_NAME',
            'DB_DATABASE'
        ], $env, 'shopify_reviews');

        $this->username = $this->getEnvValue([
            'MYSQL_USER',
            'DB_USER',
            'DATABASE_USER',
            'DB_USERNAME'
        ], $env, 'root');

        $this->password = $this->getEnvValue([
            'MYSQL_PASSWORD',
            'DB_PASS',
            'DATABASE_PASSWORD',
            'DB_PASSWORD'
        ], $env, '');

        $this->port = $this->getEnvValue([
            'MYSQL_PORT',
            'DB_PORT',
            'DATABASE_PORT'
        ], $env, '3306');

        // Enhanced debug logging for any live server
        $isLiveServer = !in_array($this->host, ['localhost', 'http://127.0.0.1:4173']) ||
            getenv('RAILWAY_ENVIRONMENT') ||
            getenv('HEROKU_APP_NAME') ||
            $_SERVER['HTTP_HOST'] !== 'http://127.0.0.1:4173';

        // $isLiveServer = !in_array($this->host, ['localhost', '127.0.0.1']) ||
        //     getenv('RAILWAY_ENVIRONMENT') ||
        //     getenv('HEROKU_APP_NAME') ||
        //     $_SERVER['HTTP_HOST'] !== 'localhost:5173';

        if ($isLiveServer) {
            error_log("Live Server DB Config - Platform: " . $this->detectPlatform() .
                ", Host: {$this->host}, DB: {$this->db_name}, User: {$this->username}, Port: {$this->port}");
        }
    }

    /**
     * Get environment value from multiple possible variable names
     */
    private function getEnvValue($varNames, $envFile, $default)
    {
        foreach ($varNames as $varName) {
            // Check $_ENV superglobal
            if (isset($_ENV[$varName]) && $_ENV[$varName] !== '') {
                return $_ENV[$varName];
            }

            // Check getenv()
            $value = getenv($varName);
            if ($value !== false && $value !== '') {
                return $value;
            }

            // Check .env file
            if (isset($envFile[$varName]) && $envFile[$varName] !== '') {
                return $envFile[$varName];
            }
        }

        return $default;
    }

    /**
     * Detect hosting platform for better debugging
     */
    private function detectPlatform()
    {
        if (getenv('RAILWAY_ENVIRONMENT')) return 'Railway';
        if (getenv('HEROKU_APP_NAME')) return 'Heroku';
        if (getenv('VERCEL')) return 'Vercel';
        if (getenv('NETLIFY')) return 'Netlify';
        if (strpos($_SERVER['HTTP_HOST'] ?? '', 'xcloud') !== false) return 'xCloud';
        if (strpos($_SERVER['HTTP_HOST'] ?? '', 'cpanel') !== false) return 'cPanel';
        if (strpos($_SERVER['HTTP_HOST'] ?? '', 'digitalocean') !== false) return 'DigitalOcean';
        if (strpos($_SERVER['HTTP_HOST'] ?? '', 'aws') !== false) return 'AWS';
        if (strpos($_SERVER['HTTP_HOST'] ?? '', 'azure') !== false) return 'Azure';
        if (strpos($_SERVER['HTTP_HOST'] ?? '', 'godaddy') !== false) return 'GoDaddy';
        if (strpos($_SERVER['HTTP_HOST'] ?? '', 'hostgator') !== false) return 'HostGator';
        if (strpos($_SERVER['HTTP_HOST'] ?? '', 'bluehost') !== false) return 'Bluehost';

        return 'Unknown Platform';
    }

    public function getConnection()
    {
        $this->conn = null;

        try {
            $dsn = "mysql:host=" . $this->host . ";port=" . $this->port . ";dbname=" . $this->db_name . ";charset=utf8mb4";

            // Enhanced logging for debugging live server issues
            error_log("Attempting database connection to: {$this->host}:{$this->port}/{$this->db_name} as {$this->username}");

            $this->conn = new PDO(
                $dsn,
                $this->username,
                $this->password,
                [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES => false,
                    PDO::ATTR_TIMEOUT => 30, // 30 second timeout
                    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4"
                ]
            );

            // Test the connection with a simple query
            $testStmt = $this->conn->query("SELECT 1");
            if ($testStmt) {
                error_log("Database connection successful to {$this->host}/{$this->db_name}");
            }
        } catch (PDOException $exception) {
            $errorMsg = "Database connection failed to {$this->host}:{$this->port}/{$this->db_name} as {$this->username} - " . $exception->getMessage();
            error_log($errorMsg);

            // Log environment variables for debugging (without password)
            error_log("Environment check - MYSQL_HOST: " . (getenv('MYSQL_HOST') ? 'SET' : 'NOT_SET') .
                ", MYSQL_DATABASE: " . (getenv('MYSQL_DATABASE') ? 'SET' : 'NOT_SET') .
                ", MYSQL_USER: " . (getenv('MYSQL_USER') ? 'SET' : 'NOT_SET') .
                ", MYSQL_PASSWORD: " . (getenv('MYSQL_PASSWORD') ? 'SET' : 'NOT_SET'));

            throw new Exception($errorMsg);
        }

        return $this->conn;
    }
}

/**
 * Global function for backward compatibility
 * Returns a PDO connection using the centralized Database class
 */
function getDbConnection()
{
    $database = new Database();
    return $database->getConnection();
}
