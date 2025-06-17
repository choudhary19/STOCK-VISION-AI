
import { useEffect, useState } from "react"
import axios from "axios"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function UserManagement() {
  const [users, setUsers] = useState([])  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/get-users') 
        
        console.log("API Response:", response.data); 

        setUsers(response.data.data || []);  
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading users...</div>;
  }

  const handleDelete = async (userId) => {
    const Confirm = window.confirm("Are you sure you want to delete this user?");
    if (Confirm) {
      try {
        const response = await axios.delete(`http://localhost:5000/api/delete-user/${userId}`);
        console.log("Delete Response:", response.data);
        alert("User deleted successfully.");
        // Filter out the deleted user from the state
        setUsers(users.filter(user => user._id !== userId));
      } catch (error) {
        console.error("Error deleting user:", error);
          alert("Failed to delete user.");
      }
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>

      <div className="rounded-lg border border-gray-800 p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">User List</h2>
          <p className="text-gray-400">Manage and view all users</p>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-800">
              <TableHead className="text-white">UserId</TableHead>
              <TableHead className="text-white">Name</TableHead>
              <TableHead className="text-white">Email</TableHead>
              <TableHead className="text-white">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length > 0 ? (
              users.map((user) => (
                <TableRow key={user._id} className="border-b border-gray-800">
                  <TableCell className="font-medium">{`${user._id}`}</TableCell>
                  <TableCell className="font-medium">{`${user.firstName} ${user.lastName}`}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <div className="flex gap-3">
                      <Button variant="secondary" size="sm">Update</Button>

                      <Button variant="destructive" size="sm"
                       onClick={()=> handleDelete(user._id)}
                      >Delete</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="3" className="text-center">No users found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
