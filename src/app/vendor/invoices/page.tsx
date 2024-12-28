"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ManageInvoices() {
  const [invoices, setInvoices] = useState(initialInvoices)
  const [newInvoice, setNewInvoice] = useState({
    id: '',
    date: '',
    amount: '',
    status: 'Pending'
  })

  const handleAddInvoice = () => {
    setInvoices([...invoices, { ...newInvoice, id: Date.now().toString() }])
    setNewInvoice({ id: '', date: '', amount: '', status: 'Pending' })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Manage Invoices</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Invoice List</CardTitle>
          <CardDescription>View and manage your invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>{invoice.id}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>${invoice.amount}</TableCell>
                  <TableCell>{invoice.status}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Generate New Invoice</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Generate New Invoice</DialogTitle>
            <DialogDescription>Enter the details for the new invoice</DialogDescription>
          </DialogHeader>
          <form onSubmit={(e) => { e.preventDefault(); handleAddInvoice(); }}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">
                  Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={newInvoice.date}
                  onChange={(e) => setNewInvoice({...newInvoice, date: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="amount" className="text-right">
                  Amount
                </Label>
                <Input
                  id="amount"
                  type="number"
                  value={newInvoice.amount}
                  onChange={(e) => setNewInvoice({...newInvoice, amount: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">
                  Status
                </Label>
                <Select
                  value={newInvoice.status}
                  onValueChange={(value) => setNewInvoice({...newInvoice, status: value})}
                >
                  <SelectTrigger id="status" className="col-span-3">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Paid">Paid</SelectItem>
                    <SelectItem value="Overdue">Overdue</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Generate Invoice</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

const initialInvoices = [
  { id: 'INV001', date: '2023-06-01', amount: '5000', status: 'Paid' },
  { id: 'INV002', date: '2023-06-15', amount: '7500', status: 'Pending' },
  { id: 'INV003', date: '2023-05-30', amount: '6000', status: 'Overdue' },
]

