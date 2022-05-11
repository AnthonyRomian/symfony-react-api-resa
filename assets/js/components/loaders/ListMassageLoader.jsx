import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width="100%"
        height={400}
        viewBox="0 0 1200 400"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="5%" y="10" rx="5" ry="5" width="90%" height="35" />
        <rect x="5%" y="51" rx="10" ry="10" width="90%" height="97" />
        <rect x="5%" y="172" rx="5" ry="5" width="90%" height="35" />
        <rect x="5%" y="214" rx="10" ry="10" width="90%" height="97" />
        <rect x="5%" y="550" rx="5" ry="5" width="90%" height="35" />
        <rect x="5%" y="328" rx="10" ry="10" width="90%" height="97" />
    </ContentLoader>
)

export default MyLoader

