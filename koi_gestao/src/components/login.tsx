"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Login() {
  return (
      <main className="flex min-h-screen items-center justify-center -mt-32 text-muted-foreground">
      <Card className="w-full max-w-sm shadow-xl">
        <CardHeader>
          <div className=" flex items-center justify-between">
            <div>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Digite seu email e senha para acessar sua conta.
              </CardDescription>
            </div>

            <Link href="/cadastro">
              <Button variant="link">Cadastro</Button>
            </Link>
          </div>
        </CardHeader>

        <CardContent>
          <form className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
                <a className="text-sm underline-offset-4 hover:underline">
                  Esqueceu a senha?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full">Login</Button>
          
        </CardFooter>
      </Card>
    </main>
  );
}
