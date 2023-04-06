export interface GalleryFlexContainerProps {
    flex?: "row" | "column";
    width?: string;
    margin?: string;
    padding?: string;
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch";
    justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
}

export interface ImageGalleryProps {
    width?: number;
    height?: number;
    src: string;
    borderRadius?: number;
    objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}