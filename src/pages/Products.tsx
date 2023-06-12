import { Layout, Page, Text } from "@shopify/polaris";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductsTable from "../components/productsTable";

const queryClient = new QueryClient();

const Products = () => {
  return (
    <Page>
      <Layout sectioned>
        <QueryClientProvider client={queryClient}>
          <div style={{ paddingBottom: "35px", paddingTop: "20px" }}>
            <Text alignment="start" variant="heading2xl" as="h6">
              Products
            </Text>
          </div>
          <ProductsTable />
        </QueryClientProvider>
      </Layout>
    </Page>
  );
};

export default Products;
