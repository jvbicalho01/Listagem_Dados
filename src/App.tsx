import { Plus, Search, FileDown, MoreHorizontal } from "lucide-react"

import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { Button } from "./components/ui/Button"
import { Input, Control } from "./components/ui/Input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/Table"
import { Pagination } from "./components/Pagination"


export function App() {

  return (
    <>
      <div className="py-10 space-y-8">
        <div>
          <Header />
          <Tabs />
        </div>

        <main className="max-w-6xl mx-auto space-y-5">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold">Tags</h1>
            <Button variant="primary">
              <Plus className="size-3" />
              Create New
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <Input variant="filter">
              <Search className="size-3" />
              <Control placeholder="Search tags..." />
            </Input>

            <Button>
              <FileDown className="size-3" />
              Export
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Tag</TableHead>
                <TableHead>Amount of videos</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((value, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell></TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-medium">React</span>
                        <span className="text-xs text-zinc-500">9999-9999-9999</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-zinc-300">
                      13 vídeos
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="icon">
                        <MoreHorizontal className="size-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>

          {/* <Pagination /> */}
        </main>

      </div>
    </>
  )
}