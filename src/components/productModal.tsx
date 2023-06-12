import { Image, Text, Modal, Thumbnail, VerticalStack } from "@shopify/polaris";
import { ProductType } from "../common/interfaces";

type Props = {
  active: boolean;
  product: ProductType | undefined;
  handleClose: any;
};
const ProductModal = ({ active, product, handleClose }: Props) => {
  if (product) {
    return (
      <Modal open={active} onClose={handleClose} title={product.title}>
        <Modal.Section>
          <div className="custom-modal-content">
            <img
              width={250}
              height={250}
              src={product.image}
              alt={product.title + "image"}
            />
          </div>
          <div
            className="custom-modal-content"
            style={{
              paddingTop: "20px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "80%",
              }}
            >
              <VerticalStack align="space-between">
                <Text alignment="start" variant="heading2xl" as="h6">
                  Description:
                </Text>
                <div
                  style={{
                    paddingTop: "20px",
                  }}
                >
                  <Text
                    color="subdued"
                    alignment="start"
                    variant="bodyLg"
                    as="p"
                  >
                    {product.description}
                  </Text>
                </div>
              </VerticalStack>
            </div>
          </div>
          <div
            style={{
              paddingTop: "20px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "80%",
                paddingBottom: "25px",
              }}
            >
              <VerticalStack>
                <Text alignment="start" variant="heading2xl" as="h6">
                  Rating:
                </Text>
                <div
                  style={{
                    paddingTop: "20px",
                  }}
                >
                  <Text alignment="start" variant="bodyLg" as="p">
                    <b>Rating:</b> {product.rating.rate}
                  </Text>
                  <Text alignment="start" variant="bodyLg" as="p">
                    <b>Rated By:</b> {product.rating.count} customers
                  </Text>
                </div>
              </VerticalStack>
            </div>
          </div>
        </Modal.Section>
      </Modal>
    );
  } else {
    return null;
  }
};

export default ProductModal;
