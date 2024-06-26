'use client'

import useStore from '@/lib/zustand'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'

export default function NameDialog() {
  const { user, setUser } = useStore()

  const handleSetUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const user = formData.get('user') as string
    setUser(user)
  }

  return (
    <Dialog defaultOpen open={!user}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Insira seu nome</DialogTitle>
          <DialogDescription>
            Insira seu nome para começar a conversar.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSetUser}>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="user">Seu nome</Label>
              <Input
                id="user"
                name="user"
                placeholder="Insira o seu nome aqui"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
