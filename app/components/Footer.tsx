
export default function Footer() {
    return (
        <footer className="bg-panel-bg text-foreground text-sm py-4 mt-8 border-t border-gray-700">
            <div className="max-w-4xl mx-auto flex justify-center items-center">
                <p className="text-muted">
                    Theme inspired by{" "}
                    <a
                        href="https://github.com/Binaryify/OneDark-Pro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent underline hover:text-yellowAccent"
                    >
                    Atom One Dark Pro 
                    </a>{" "}
                    theme.
                </p>
            </div>
        </footer>
    );
}