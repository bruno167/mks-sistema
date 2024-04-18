import { ProductsGrid } from '@/components/shared/styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Store from '@/components/Store';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';
interface AppProps {


}
export default function App(props : AppProps){
    const queryClient = new QueryClient();
    return(
            <>
                <Header />
                <main>
                    <ProductsGrid>
                        <QueryClientProvider client={queryClient}>
                            <Store />
                        </QueryClientProvider>
                    </ProductsGrid>
                </main>
                <Footer />          
            </>
    )
}