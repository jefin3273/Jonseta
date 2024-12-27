import { Metadata } from "next"
import { DriverHeader } from "@/components/driver/driver-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DollarSign, Download, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: "Payouts",
  description: "View your payout details and history",
}

export default function PayoutsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <DriverHeader title="Payouts" />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Current Balance
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,234.56</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Last Payout
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,345.67</div>
            <p className="text-xs text-muted-foreground">Processed on June 15, 2023</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Next Payout Date
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">June 30, 2023</div>
            <p className="text-xs text-muted-foreground">Estimated amount: $1,500.00</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Monthly Earnings
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$5,678.90</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payout History</CardTitle>
          <CardDescription>Your recent payouts and transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payoutHistory.map((payout) => (
                <TableRow key={payout.id}>
                  <TableCell>{payout.date}</TableCell>
                  <TableCell>{payout.description}</TableCell>
                  <TableCell>${payout.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      payout.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      payout.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {payout.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Download Full Statement
        </Button>
      </div>
    </div>
  )
}

const payoutHistory = [
  { id: 1, date: "2023-06-15", description: "Weekly payout", amount: 2345.67, status: "Completed" },
  { id: 2, date: "2023-06-08", description: "Weekly payout", amount: 2156.89, status: "Completed" },
  { id: 3, date: "2023-06-01", description: "Weekly payout", amount: 1987.54, status: "Completed" },
  { id: 4, date: "2023-05-25", description: "Weekly payout", amount: 2234.12, status: "Completed" },
  { id: 5, date: "2023-05-18", description: "Weekly payout", amount: 2078.45, status: "Completed" },
]

