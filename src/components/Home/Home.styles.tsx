import { PageHeading } from "@components/common";
import { styled } from "@styles/stitches.config";

export const Container = styled("div", {
    height: "100%",
    color: "$white",
});

export const Heading = styled(PageHeading, {
    fontSize: "8vw",
    marginBottom: "2vw",
    "@sm": {
        fontSize: "40px",
        marginBottom: "20px",
    },
});

export const TopSection = styled("div", {
    height: "25%",
});

export const Hero = styled("div", {
    position: "relative",
    padding: "$pagePadding",
    "@md": {
        padding: "50px",
    },
    "@sm": {
        padding: "20px",
    },
});

export const SubHeadingContainer = styled("div", {
    display: "flex",
    gap: "2rem",
});

export const SubHeading = styled("h5", {
    fontSize: 24,
    fontWeight: "normal",
});
export const Description = styled("p", {
    fontSize: 14,
    marginTop: 15,
    lineHeight: 2.2,
    color: "$grey",
});

export const CanvasContainer = styled("div", {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
});
