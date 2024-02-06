import Box from "./Box";


const BoxList = ({boxes, deleteBox}) => {
    return (
        <div>
            <h3> Boxes</h3>
            <div>
                {boxes.map(({ id, color, width, height }) => <Box id={id} color={color} key={id} width={width} height={height} deleteBox={deleteBox} />)}
                
            </div>
        </div>
    )
}

export default BoxList