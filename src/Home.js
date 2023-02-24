import React,{useState} from "react";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import HistoryIcon from '@mui/icons-material/History';
import AutorenewIcon from '@mui/icons-material/Autorenew';
const Home=()=>{
    const [count,setcount]=useState(0)
    const [img,setimg] = useState('https://scontent.fubp1-1.fna.fbcdn.net/v/t39.30808-6/311874581_208277451550628_662130537013275154_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeF4zLX6fHKLH2_CFzCUhhRACm5vqBAKYfEKbm-oEAph8ZdvpzTu6itoFGEQl7THFfDgYO5XfsnmvsGhogeQl7JP&_nc_ohc=8BHNWTUgusMAX_fC3rS&tn=20a6g1hPxfxfYxez&_nc_pt=1&_nc_ht=scontent.fubp1-1.fna&oh=00_AfCUdwnLSqE2e-uTqd6nxk_5wmgV_sbeQI7e2zna3P0HLw&oe=63FD9E48');
    const [img1,setimg1] = useState('https://scontent.fubp1-1.fna.fbcdn.net/v/t39.30808-6/311874581_208277451550628_662130537013275154_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeF4zLX6fHKLH2_CFzCUhhRACm5vqBAKYfEKbm-oEAph8ZdvpzTu6itoFGEQl7THFfDgYO5XfsnmvsGhogeQl7JP&_nc_ohc=8BHNWTUgusMAX_fC3rS&tn=20a6g1hPxfxfYxez&_nc_pt=1&_nc_ht=scontent.fubp1-1.fna&oh=00_AfCUdwnLSqE2e-uTqd6nxk_5wmgV_sbeQI7e2zna3P0HLw&oe=63FD9E48');
    const friend = [
        'https://scontent.fbkk3-6.fna.fbcdn.net/v/t1.15752-9/333061341_523679579949908_907036683396534154_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHQirhsijAo-_QxwmWByzv6EiyVw3PgUe4SLJXDc-BR7uWyBRAOmZtP-zkn6KaF0Meeu41SRu2IzPAxyrgl1tKm&_nc_ohc=oAwnUEj7B0kAX_WbSMm&_nc_pt=1&_nc_ht=scontent.fbkk3-6.fna&oh=03_AdR_y0olmSS9wHtqAs-4L9fkSLXSZvxL90na_c9VO_sNLA&oe=642026CB',
        'https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.15752-9/312816324_914707849704533_7789529648184978169_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeH3OifGSEQdo2RmeoHbtKrXFRt_tNhDboQVG3-02ENuhAERkRMXs4q02Q_gsgf5O3qoMzt1rGSXfHuo4hGfMgZ5&_nc_ohc=YaIADdCSg-wAX-aPGoJ&_nc_pt=1&_nc_ht=scontent.fbkk3-2.fna&oh=03_AdQF3PxC9VUWPUxDbqJgthDPZLpuSdg4wKCBQcRhCr2ZWw&oe=642046B3',
        "https://scontent.fbkk4-5.fna.fbcdn.net/v/t1.15752-9/329500370_587834562938239_4931815682528174149_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeG5NmIl61GwZtGHCqXywTYKcWab9VUTAAlxZpv1VRMACSW6XpxP9Vo-u2pZWKdeIz6mUpPI74xn6hbAH0waYecS&_nc_ohc=5GQoJElm8aUAX-WEAYj&_nc_pt=1&_nc_ht=scontent.fbkk4-5.fna&oh=03_AdS146xMWyMnGGXznYhwzPr4WJ5-pREeojUWK61Nn5xFNw&oe=6420328C",
        "https://scontent.fbkk4-3.fna.fbcdn.net/v/t1.15752-9/319723249_2796643040466795_6419047545758835725_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeH52XJa1Le86FSjd-rdacqEqONu1lr7vPyo427WWvu8_GyJ81b6xqhJkVuekrY88A2hnBQCCaka1Mp2FwIVn9bs&_nc_ohc=36SG3CjvdQ8AX8FcAdz&_nc_pt=1&_nc_ht=scontent.fbkk4-3.fna&oh=03_AdSW5VyF_8zT4dQtFyVHfk5kAuksFoyCNSVI-iuMRLUUTQ&oe=64202641",
        "https://scontent.fbkk4-2.fna.fbcdn.net/v/t1.15752-9/333268473_1299188187614176_7266512062486910303_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGX0GDAmfzXlnKWZJuWFjTPZa6gFOM_EytlrqAU4z8TK_0hSx4EXkul-MGS66-eZfBXY3zLK1xHkon2TzZWkwX9&_nc_ohc=6JJvKMQ439wAX_DyG70&_nc_pt=1&_nc_ht=scontent.fbkk4-2.fna&oh=03_AdTBPhOOv95O9MoeupR5n5bwnNXfoywyrjUtjjF05USK4w&oe=64202195",
        "https://scontent.fbkk3-4.fna.fbcdn.net/v/t1.15752-9/328624831_220905770319852_3147996650692139172_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeH78B6w1Iarly68-KpRqFmV-hfAvfKz7VH6F8C98rPtUX1oix2SxyzwFvgxg3N24k9k3GThtOrgrnkJ9KOK1Gyc&_nc_ohc=zxSFj9Iv690AX8DtCpp&tn=20a6g1hPxfxfYxez&_nc_pt=1&_nc_ht=scontent.fbkk3-4.fna&oh=03_AdSPqI_YgEpKKMcfeArZmOc6ZOqFpBySa0S2uI1M2UO9hw&oe=64202636"
        ]
    const Attaches = ['https://static.thairath.co.th/media/4DQpjUtzLUwmJZZSE6PpmXiY5co3jMjxMhVEOa769jGS.jpg',
                    'https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsbGAoA72JISKLT5r3TsthcOikxAX9muAByVxmBxsOoDFAxA0NTKBdJ.jpg',
                    'https://ichef.bbci.co.uk/news/640/cpsprodpb/16F65/production/_107335049_epahi054463889.jpg',
                    "https://gumlet.assettype.com/ejan%2F2022-12%2F3cd0ac65-e7e9-4dab-91b6-f0ad71ac7716%2FS__4341810.jpg?auto=format%2Ccompress&format=webp&w=400&dpr=2.6",
                    "http://f.ptcdn.info/101/042/000/o66drgcehzrQIDQ6XiA-o.jpg",
                    "https://pbs.twimg.com/media/EeooULXUwAA5dxO.jpg",
                    "https://static.wixstatic.com/media/8d60a3_3abf515e1e2949f18a2c9bcf402bd22f~mv2.jpg/v1/fill/w_640,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8d60a3_3abf515e1e2949f18a2c9bcf402bd22f~mv2.jpg"]

    const random=()=>{
        const r = Math.floor(Math.random()*Attaches.length);
        setimg1(Attaches[r])
        setcount(count+1)
    }
    return(
        <div className='container bg-info p-5'>
        
          <div className='box'>
                <div className='child' on>
                    <Badge badgeContent={count} color="success"  size="lg" anchorOrigin={{vertical: 'top',horizontal: 'left',}}>
                      <MailIcon color="action" />
                    </Badge>
                    <br></br>
                  <img src={img} alt="..." className="img-thumbnail"/>
                </div>
                <div className='child'>
                  <img src={img1} alt="..." className="img-thumbnail"/>
                </div>
               
          </div>
          <center>คุณหน้าเหมือนใคร</center>
          
          <div className='box'>
              <div className='child'>
                <select class="form-select" size="3" onChange={(e)=>{setimg(friend[e.target.value])}} aria-label="size 3 select example">
                  <option value="0">ตะวัน</option>
                  <option value="1">คลีน</option>
                  <option value="2">แพรว</option>
                  <option value="3">ฟลุ้ค</option>
                  <option value="4">บี</option>
                  <option value="5">ฟ้อค</option>
                </select>
              </div>
              <div className='child'>
                    <div className='child1'>
                        <div className='m-5'>
                            <button type="button" onClick={random} class="btn btn-success">Random</button>
                        </div>
                        <div>
                            <div className="cursor">
                                <AutorenewIcon onClick={()=>{setcount(0)}}/>
                            </div> 
                        </div>
                        
                    </div>
                    
              </div>
          </div>
         
          
                
        </div>
    )
}
export default Home;