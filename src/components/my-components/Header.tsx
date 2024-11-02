import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface HeaderProps {
    title: string,
    description: string
}

export const HeaderCard = ({ title, description }: HeaderProps) => {
  return (
    <Card className="w-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-2xl rounded-lg border-b-4 border-blue-800">
      <CardHeader className="text-center border-b border-gray-300 pb-6">
        <CardTitle className="text-5xl font-extrabold text-white tracking-tight">{title}</CardTitle>
        <CardDescription className="text-xl text-gray-200 mt-2">{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
