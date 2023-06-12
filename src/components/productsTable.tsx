import { IndexTable, LegacyCard, Thumbnail } from "@shopify/polaris";
import { useQuery } from "react-query";
import { ProductType } from "../common/interfaces";
import { useState } from "react";
import ProductModal from "./productModal";

const ProductsTable = () => {
  const { isLoading, error, data } = useQuery<ProductType[]>({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  });

  const [selectedProdcut, setSelectedProduct] = useState<
    ProductType | undefined
  >();

  const handleModalClose = () => {
    setSelectedProduct(undefined);
  };

  const resourceName = {
    singular: "order",
    plural: "orders",
  };

  const rowMarkup = data
    ? data.map((product, index) => {
        const truncatedTitle =
          product.title.length > 8
            ? product.title.substring(0, 8) + "..."
            : product.title;
        return (
          <IndexTable.Row
            id={product.id.toString()}
            key={product.id}
            position={index}
            onClick={() => {
              console.log("hehe"); // Log "hehe" to the inspect tab
              setSelectedProduct(product);
            }}
          >
            <IndexTable.Cell>
              <Thumbnail
                size="small"
                source={product.image}
                alt={`${product.image} +image`}
              />
            </IndexTable.Cell>
            <IndexTable.Cell>{truncatedTitle}</IndexTable.Cell>
            <IndexTable.Cell>{product.category}</IndexTable.Cell>
            <IndexTable.Cell>${product.price}</IndexTable.Cell>
          </IndexTable.Row>
        );
      })
    : [];

  return (
    <LegacyCard sectioned>
      {data && (
        <IndexTable
          // selectable={false} removing checkbox seems to be an issue, because onClick does not work then for individual rows
          resourceName={resourceName}
          itemCount={data.length}
          headings={[
            { title: "" },
            { title: "Product" },
            { title: "Category" },
            { title: "Price" },
          ]}
        >
          {rowMarkup}
        </IndexTable>
      )}
      <ProductModal
        active={!!selectedProdcut}
        handleClose={handleModalClose}
        product={selectedProdcut}
      />
    </LegacyCard>
  );
};

export default ProductsTable;
