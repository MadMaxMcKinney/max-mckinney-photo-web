import React from "react";

export default function SectionTitle({ title, description, action }: { title: string; description: string; action?: React.ReactNode }) {
    return (
        <div className="mb-6 flex justify-between">
            <div>
                <h1 className="text-2xl font-medium">{title}</h1>
                <p className="text-muted-foreground max-w-2xl">{description}</p>
            </div>
            {action && <div className="flex h-full items-center">{action}</div>}
        </div>
    );
}
