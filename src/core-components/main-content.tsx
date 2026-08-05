import { cx } from "class-variance-authority"
import React from "react"

interface MaincontentProps extends React.ComponentProps<"main">{}

export default function MainContent({children, className,...props}: MaincontentProps)
{
    return(<main className={cx("mt-4 md:mt-8", className)} {...props}>{children}</main>)
}