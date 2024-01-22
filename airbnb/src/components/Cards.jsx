import React from "react"

export default function Cards(props){
    return (
        <div className="cards">
            <img className="icon" src={props.item.coverImg} alt="icon"></img>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG0SURBVHgBtVRBUsJAEJzZRPGILzA+gVtyMrzAeLM0VeQHyAvEF4g/4BApj/7AeCJVXvID8wO5UCWwybiJECHZ4GJhH1JTM9Mzu5OeBdgBZLldsq7vd+GgaiKZnkHI33MS8VMMn2IVHgNFpLRwCht0T5Wn3AAZnhc2wpkyTyVpfTwFsaEfYzCc/MZVukECc7vsS2cLDxSg1IAh65R9CD8j24Z8RGS6dgJoyBI0RidE0JfFhP+OAGMpDyjG0A8wK04IL/APQJ62GBzpkbCfYd8gCPBtFBUqSky3L+R3C3sAAfW08eMgszdkSualkKMmxoUG/AkUc04Xh+LkK8+GirL1x8ZBiwAeYEdkHGxMW+vF85p1hMRyByLYBZXiQk1a6PdlMVZPSiNQRJ1UtzYQy6W0SN+51KmLSUdEttekGf8AdUzE23Qqe5ukN0hm3AZpZwjEN5BEmsln4sgo0gZI5FRrU4+FfpuN/Xb2U8txjaXSJ1w6otRys/E0l6Ur2s691Z2RjqlyA265zqp4nbbzk1V3pgnTuVHO08sOraEHMF8Mk5Re9XA0hC1YnvaGm1dRrjotrfzkL2gXsDwSY4yhAAAAAElFTkSuQmCC" alt="star"></img>
            <span>{props.item.stats.rating}</span>
            <span>({props.item.stats.reviewCount}).</span>
            <span>{props.item.location}</span>
            <h2>{props.item.title}</h2>
            <span><span style={{ fontWeight: 'bold' }}>From <span>${props.item.price}</span></span> / person</span>
        </div>
    )
}