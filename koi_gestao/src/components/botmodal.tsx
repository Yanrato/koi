import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Modal from "./modal"

export function BotModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">+ Nova Tarefa</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <FieldGroup>
            <Field>
              <Modal />
            </Field>
          </FieldGroup>
        </DialogContent>
      </form>
    </Dialog>
  )
}
