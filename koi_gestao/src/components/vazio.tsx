import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { IconFolderCode } from "@tabler/icons-react"
import { ArrowUpRightIcon } from "lucide-react"
import{ BotModal }from "./botmodal" 

export function Vazio() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconFolderCode />
        </EmptyMedia>
        <EmptyTitle>Nenhuma tarefa criada ainda</EmptyTitle>
        <EmptyDescription>
          Você ainda não criou nenhuma tarefa. Comece criando sua primeira tarefa.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
      </EmptyContent>
    <BotModal />
    </Empty>
  )
}
