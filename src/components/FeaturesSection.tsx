import { Pill, CreditCard, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Pill,
        title: "Medicamentos Completos",
        description: "Referência, genéricos e similares com a maior variedade do Estado",
    },
    {
        icon: CreditCard,
        title: "Melhor Preço",
        description: "Economia de até 90% em produtos selecionados",
    },
    {
        icon: Clock,
        title: "Compra Programada",
        description: "Parcelamento em até 10x sem juros",
    },
    {
        icon: ShieldCheck,
        title: "Qualidade Garantida",
        description: "Produtos aprovados pela ANVISA com total segurança",
    },
];

const FeaturesSection = () => {
    return (
        <section id="features" className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-heading font-black text-3xl md:text-5xl text-primary mb-4">
                        Na Preço Popular Você Encontra!
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Todos os medicamentos de referência, genéricos e similares
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50"
                        >
                            {/* Ajustei de 'gradient-hero' para 'bg-primary' caso você não tenha a classe de gradiente pronta */}
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="text-primary" size={28} />
                            </div>
                            <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Linha vermelha de destaque no hover */}
                            <div className="absolute bottom-0 left-8 right-8 h-1 rounded-full bg-[#e31d1a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;