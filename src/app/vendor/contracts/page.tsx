"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ManageContracts() {
  const [contracts, setContracts] = useState(initialContracts)
  const [newContract, setNewContract] = useState({
    id: '',
    startDate: '',
    endDate: '',
    value: '',
    status: 'Active'
  })

  const handleAddContract = () => {
    setContracts([...contracts, { ...newContract, id: Date.now().toString() }])
    setNewContract({ id: '', startDate: '', endDate: '', value: '', status: 'Active' })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Manage Contracts</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Active Contracts</CardTitle>
          <CardDescription>View and manage your current contracts</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contract ID</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Contract Value</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contracts.map((contract) => (
                <TableRow key={contract.id}>
                  <TableCell>{contract.id}</TableCell>
                  <TableCell>{contract.startDate}</TableCell>
                  <TableCell>{contract.endDate}</TableCell>
                  <TableCell>${contract.value}</TableCell>
                  <TableCell>{contract.status}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">View Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Add New Contract</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Contract</DialogTitle>
            <DialogDescription>Enter the details of the new contract</DialogDescription>
          </DialogHeader>
          <form onSubmit={(e) => { e.preventDefault(); handleAddContract(); }}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="startDate" className="text-right">
                  Start Date
                </Label>
                <Input
                  id="startDate"
                  type="date"
                  value={newContract.startDate}
                  onChange={(e) => setNewContract({...newContract, startDate: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="endDate" className="text-right">
                  End Date
                </Label>
                <Input
                  id="endDate"
                  type="date"
                  value={newContract.endDate}
                  onChange={(e) => setNewContract({...newContract, endDate: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="value" className="text-right">
                  Contract Value
                </Label>
                <Input
                  id="value"
                  type="number"
                  value={newContract.value}
                  onChange={(e) => setNewContract({...newContract, value: e.target.value})}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add Contract</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

const initialContracts = [
  { id: '1', startDate: '2023-01-01', endDate: '2023-12-31', value: '100000', status: 'Active' },
  { id: '2', startDate: '2023-03-15', endDate: '2024-03-14', value: '75000', status: 'Active' },
  { id: '3', startDate: '2022-07-01', endDate: '2023-06-30', value: '120000', status: 'Expiring Soon' },
]

