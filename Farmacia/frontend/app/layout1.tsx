export const metadata = {
    title: "Farmácia",
    description: "Sistema de gestão de farmácia de manipulação",
  };
  
  export default function RootLayout({ children, }) {
    return (
      <html lang="pt-BR">
        <body className="bg-gray-100 text-gray-900">
          {children}
        </body>
      </html>
    );
  }
  