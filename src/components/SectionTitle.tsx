export default function SectionTitle({ title, description }: { title: string; description: string }) {
    return (
        <div className="mb-6">
            <h1 className="font-medium text-2xl">{title}</h1>
            <p className="text-muted-foreground max-w-2xl">{description}</p>
        </div>
    );
}
