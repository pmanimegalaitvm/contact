export default function Pgdfinal2(){
    return(
        <div>
            <form>
            <div>
                    <label for="">First Name:</label>
                    <input type="text" value={fsname} onChange={(e)=>setfs(e.target.value)}></input>
                </div>
                <div>
                    <label for="">Middle Name:</label>
                    <input type="text" value={midname} onChange={(e)=>setmid(e.target.value)}></input>
                </div>
                <div>
                    <label for="">Last Name:</label>
                    <input type="text" value={lsname} onChange={(e)=>setls(e.target.value)}></input>
                </div>
                <div>
                    <label for="">Email:</label>
                    <input type="text" value={midname} onChange={(e)=>setmid(e.target.value)}></input>
                </div>
            </form>
        </div>
    )
}