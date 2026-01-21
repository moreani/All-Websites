import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { BrainCircuit, Bot, BarChart3, ShieldCheck, SmilePlus, FileText } from "lucide-react"

const services = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Call Analytics & Speech Recognition",
    description:
      "Gain insights from call data using AI algorithms. Our speech recognition transcribes and analyzes calls accurately, incorporating keyword spotting and sentiment analysis to enhance understanding of customer interactions.",
  },
  {
    icon: Bot,
    title: "Intelligent Virtual Assistants",
    description:
      "Deploy AI-driven virtual assistants for voice or chat inquiries, reducing response times and enhancing engagement. They learn from calls to improve responses, ensuring a seamless customer experience.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics & Customer Insights",
    description:
      "Analyze past call data to predict future customer behaviors and identify churn risks. Our solutions recommend targeted marketing strategies and personalized offers based on observed customer preferences.",
  },
  {
    icon: ShieldCheck,
    title: "Automated Quality Assurance & Training Solutions",
    description:
      "Implement AI to automatically evaluate call quality, providing actionable insights for improvement. We offer AI-driven training programs using call recordings to enhance CSR skills.",
  },
  {
    icon: SmilePlus,
    title: "Sentiment and Emotion Detection",
    description:
      "Use AI to analyze caller sentiment in real-time, enabling dynamic adjustments during interactions. Visualize sentiment changes to understand factors influencing customer satisfaction.",
  },
  {
    icon: FileText,
    title: "Customized Reporting and Analytics",
    description:
      "Generate AI-driven reports identifying key trends, customer preferences, and actionable insights tailored to your business. Access critical data points relevant to your industry for a clear view of call impact.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background border-t">
      {" "}
      {/* Changed to bg-background for consistency */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-primary font-medium">Comprehensive Suite of Data Analytics Services</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="flex flex-col bg-card shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden transform hover:-translate-y-1 group hover:border-gold border-2 border-transparent"
              >
                <CardHeader className="items-center text-center pt-8 pb-4">
                  {/* Updated icon color to teal */}
                  <IconComponent size={36} className="text-teal mb-4" />
                  <CardTitle className="font-heading text-xl text-card-foreground leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center px-6 pb-8 flex-grow">
                  <CardDescription className="text-card-foreground/80 leading-relaxed text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
