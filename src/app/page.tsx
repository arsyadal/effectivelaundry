import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Bell, QrCode } from "lucide-react";

const features = [
  {
    name: "Tracking Real-time",
    description: "Pantau status pesanan laundry Anda secara real-time melalui nomor pesanan atau QR code.",
    icon: Clock,
  },
  {
    name: "Lokasi Penyimpanan",
    description: "Sistem pencatatan lokasi penyimpanan yang terorganisir untuk memudahkan pengambilan pesanan.",
    icon: MapPin,
  },
  {
    name: "Notifikasi Otomatis",
    description: "Dapatkan notifikasi ketika pesanan Anda selesai dan siap untuk diambil.",
    icon: Bell,
  },
  {
    name: "QR Code Tracking",
    description: "Setiap pesanan dilengkapi dengan QR code untuk memudahkan tracking dan pengambilan.",
    icon: QrCode,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Manajemen Laundry Modern
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Tingkatkan efisiensi bisnis laundry Anda dengan sistem manajemen modern. 
                  Pantau pesanan, kelola inventori, dan berikan pengalaman terbaik untuk pelanggan Anda.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/register">Mulai Sekarang</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">Pelajari Lebih Lanjut</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[350px] rounded-full bg-primary/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Fitur Unggulan
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Kami menyediakan solusi lengkap untuk mengatasi masalah manajemen laundry Anda.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.name}>
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary" />
                  <CardTitle>{feature.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
