<?php
require_once __DIR__ . '/config/database.php';

header('Content-Type: application/json');

try {
    echo "=== DATABASE DIAGNOSTIC ===\n";

    // Test database connection
    $database = new Database();
    $conn = $database->getConnection();
    echo "✅ Database connection: SUCCESS\n";

    // Check if reviews table exists
    $stmt = $conn->query("SHOW TABLES LIKE 'reviews'");
    if ($stmt->rowCount() > 0) {
        echo "✅ Reviews table: EXISTS\n";
    } else {
        echo "❌ Reviews table: NOT FOUND\n";
        exit;
    }

    // Check total reviews count
    $stmt = $conn->query("SELECT COUNT(*) as total FROM reviews");
    $total = $stmt->fetch()['total'];
    echo "📊 Total reviews in database: $total\n";

    // Check StoreSEO reviews specifically
    $stmt = $conn->prepare("SELECT COUNT(*) as count FROM reviews WHERE app_name = ?");
    $stmt->execute(['StoreSEO']);
    $storeseoCount = $stmt->fetch()['count'];
    echo "📊 StoreSEO reviews: $storeseoCount\n";

    // Check table structure
    $stmt = $conn->query("DESCRIBE reviews");
    $columns = $stmt->fetchAll(PDO::FETCH_COLUMN);
    echo "📋 Table columns: " . implode(', ', $columns) . "\n";

    // Get sample data
    $stmt = $conn->prepare("SELECT * FROM reviews WHERE app_name = ? LIMIT 3");
    $stmt->execute(['StoreSEO']);
    $samples = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo "📝 Sample StoreSEO reviews:\n";
    foreach ($samples as $sample) {
        echo "  - ID: {$sample['id']}, Date: {$sample['review_date']}, Store: {$sample['store_name']}\n";
    }
} catch (Exception $e) {
    echo "❌ ERROR: " . $e->getMessage() . "\n";
    echo "❌ Database connection failed\n";
}
