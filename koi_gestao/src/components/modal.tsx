"use client"

import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Modal() {
  return (
    <div className="w-full max-w-md">
      <form className="space-y-6">
        <FieldGroup>
          {/* ===== TAREFA ===== */}
          <FieldSet>
            <FieldLegend>Tarefa</FieldLegend>
            <FieldDescription>
              Crie uma nova tarefa aqui
            </FieldDescription>

            <FieldGroup>
              <Field>
                <FieldLabel>Nome da Tarefa</FieldLabel>
                <Input placeholder="Ex: Estudar NextJs" required />
              </Field>


              {/* ===== DATA ===== */}
              <Field>
                <FieldLabel>Data de Conclusão</FieldLabel>
              </Field>
              <div className="grid grid-cols-3 gap-4">
                {/* DIA */}
                <Field>
                  <FieldLabel>Dia</FieldLabel>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Dia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {Array.from({ length: 31 }, (_, i) => {
                          const day = String(i + 1).padStart(2, "0")
                          return (
                            <SelectItem key={day} value={day}>
                              {day}
                            </SelectItem>
                          )
                        })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>

                {/* MÊS */}
                <Field>
                  <FieldLabel>Mês</FieldLabel>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Mês" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {Array.from({ length: 12 }, (_, i) => {
                          const month = String(i + 1).padStart(2, "0")
                          return (
                            <SelectItem key={month} value={month}>
                              {month}
                            </SelectItem>
                          )
                        })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>

                {/* ANO */}
                <Field>
                  <FieldLabel>Ano</FieldLabel>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="YYYY" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {["2024", "2025", "2026", "2027", "2028", "2029"].map(
                          (year) => (
                            <SelectItem key={year} value={year}>
                              {year}
                            </SelectItem>
                          )
                        )}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>

          <FieldSeparator />


          {/* ===== COMENTÁRIOS ===== */}
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel>Descrição</FieldLabel>
                <Textarea
                  placeholder="Adcione mais detalhes sobre a tarefa..."
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>

          {/* ===== BOTÕES ===== */}
          <Field orientation="horizontal">
            <Button type="submit">Salvar</Button>
            <Button variant="outline" type="button">
              Cancelar
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}
