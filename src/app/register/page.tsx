"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        alert("Registrasi berhasil!");
        setForm({ name: "", email: "", password: "" });
      } else {
        const data = await res.json();
        alert(data.error || "Registrasi gagal");
      }
    } catch (err) {
      alert("Terjadi kesalahan jaringan");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Daftar Akun Laundry</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">Nama Lengkap</Label>
              <Input
                id="name"
                type="text"
                placeholder="Nama Lengkap"
                required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@email.com"
                required
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                required
                value={form.password}
                onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Mendaftar..." : "Daftar"}
            </Button>
            <p className="text-center text-sm text-muted-foreground mt-2">
              Sudah punya akun? <a href="/login" className="underline">Masuk</a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
