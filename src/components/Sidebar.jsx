import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selected, setCategory }) => (
    <Stack direction="row" sx={{
        overflowY: "auto",
        height: { md: "95%", sx: "auto" },
        flexDirection: { md: "column" }
    }}>

        {categories.map((category) => (
            <button onClick={() => setCategory(category.name)}
                key={category.name} className="category-btn"
                style={{
                    background: category.name === selected && "#FC1503",
                    color: "white"
                }}>

                <span style={{
                    color: category.name === selected ? 'white' : 'red',
                    marginRight: 15,
                }}>
                    {category.icon}
                </span>

                <span style={{
                    opacity: category.name === selected ? '1' : '0.85',
                }}>
                    {category.name}
                </span>
            </button>
        ))}

    </Stack>
)

export default Sidebar