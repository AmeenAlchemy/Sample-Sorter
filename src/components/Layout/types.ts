import { FCC } from "@app/types/fc"

export type LayoutVariants = "session" | "loading"

export interface LayoutProps {
  variant?: LayoutVariants
}

export type LayoutComponent = FCC<LayoutProps>
