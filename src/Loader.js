import { Audio } from "react-loader-spinner";
const Loader = () => {
    return (
        <>
        <center>
        <table align="center">
            <tr>
                <td align="center">
                <Audio
            height="80"
            width="80"
            color="black"
            ariaLabel="tail-spin-loading"
            radius="1"
            visible={true}
        />
                </td>
            </tr>
        </table>
        
        </center>
    </>
    );
};  
export default Loader;