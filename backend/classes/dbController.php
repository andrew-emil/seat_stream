<?php

class DBController
{
    private string $dbHost = 'localhost';
    private string $dbUser = 'root';
    private string $dbPassword = '';
    private string $dbName = 'cinema';
    private $conn;

    public function __construct()
    {
        $this->conn = new mysqli($this->dbHost, $this->dbUser, $this->dbPassword, $this->dbName);
    }
    public function openConnection(): bool
    {

        if ($this->conn->connect_error) {
            throw new Exception("Connection failed: " . $this->conn->connect_error);
            return false;
        }
        return true;
    }

    public function closeConnection(): bool
    {
        if ($this->conn) {
            $this->conn->close();
            return true;
        } else {
            return false;
        }
    }

    public function insert($data, $tableName): int
    {
        // Prepare the SQL statement with placeholders
        $sql = "INSERT INTO " . $tableName . " (";
        $sql .= implode(",", array_keys($data)) . ") VALUES (";
        $placeholders = array_fill(0, count($data), "?");
        $sql .= implode(",", $placeholders) . ")";

        $stmt = $this->conn->prepare($sql);

        // Bind values to placeholders
        $values = array_values($data);
        $stmt->bind_param(str_repeat('s', count($values)), ...$values);

        // Execute the statement
        $stmt->execute();

        // Check for errors
        if ($stmt->error) {
            die("Error inserting data: " . $stmt->error);
        }

        return $stmt->insert_id;
        // returns the id for the last inserted row (if > 0 it works fine otherwise there is an error)
    }

    public function delete($id, $tableName): int
    {
        $sql = "DELETE FROM " . $tableName . " WHERE id = ?";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();

        if ($stmt->error) {
            die("Error deleting data: " . $stmt->error);
        }

        return $stmt->affected_rows;
        // return the number of affected rows (if 0 there is an error)
    }

    public function update($id, $data, $tableName): int
    {
        $sql = "UPDATE " . $tableName . " SET ";
        $updates = [];
        foreach ($data as $key => $value) {
            $updates[] = $key . "=?";
        }
        $sql .= implode(",", $updates) . " WHERE id = ?";

        // example: UPDATE your_table_name SET name=?, email=? WHERE id = ?

        $stmt = $this->conn->prepare($sql);

        $values = array_merge(array_values($data), [$id]);
        $stmt->bind_param(str_repeat('s', count($values)), ...$values);
        $stmt->execute();

        if ($stmt->error) {
            die("Error updating data: " . $stmt->error);
        }

        return $stmt->affected_rows;
        // return the number of affected rows (if 0 there is an error)
    }

    public function select($where = null, $tableName): array
    {
        if ($this->conn === null) {
            die(json_encode(["error" => "Database connection is not established."]));
        }
        $sql = "SELECT * FROM " .  $tableName;
        if ($where) {
            $sql .= " WHERE " . $where;
        }

        $stmt = $this->conn->prepare($sql);
        if ($stmt === false) {
            die(json_encode(["error" => "Error preparing statement: " . $this->conn->error]));
        }
        $stmt->execute();
        $result = $stmt->get_result();

        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        $stmt->close();
        return $data;
    }

    public function selectWithInnerJoin($where = "",  $tableName, $joinTable, $joinCondition): array
    {
        $sql = "SELECT * FROM " . $tableName;
        if ($joinTable && $joinCondition) {
            $sql .= " INNER JOIN " . $joinTable . " ON " . $joinCondition;
        }
        if ($where) {
            $sql .= " WHERE " . $where;
        }

        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        $result = $stmt->get_result();

        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        return $data;
    }

    public function count($tableName): int
    {
        $sql = "SELECT COUNT(*) FROM " . $tableName;

        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_row();
        $count = $row[0]; // Assuming the first column (index 0) holds the count

        $stmt->close();
        return $count;
    }
}