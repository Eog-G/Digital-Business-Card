import './App.css';
import eog from './eog.jpeg'

function Info(){
    return(
        <>
            <div className='eog--container'>
                <img src={eog}/>
            </div>
            <h1 className='name'>Eoghann Gibson</h1>
            <h3 className='job'>Software Engineer</h3>
            <h4 className='website'>eoghann.co.uk</h4>

            <div className='button--container'>
                <div className='button--email'>
                    <span class="material-icons md-36">mail</span>
                    <p>Email</p>
                </div>
                <div className='button--linkedin'>
                    <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.7143 1.33334H2.28275C1.75894 1.33334 1.33334 1.76489 1.33334 2.29465V13.7054C1.33334 14.2351 1.75894 14.6667 2.28275 14.6667H13.7143C14.2381 14.6667 14.6667 14.2351 14.6667 13.7054V2.29465C14.6667 1.76489 14.2381 1.33334 13.7143 1.33334ZM5.36311 12.7619H3.38691V6.39882H5.36608V12.7619H5.36311ZM4.37501 5.52977C3.74108 5.52977 3.22918 5.01489 3.22918 4.38394C3.22918 3.75299 3.74108 3.23811 4.37501 3.23811C5.00596 3.23811 5.52084 3.75299 5.52084 4.38394C5.52084 5.01787 5.00894 5.52977 4.37501 5.52977ZM12.7708 12.7619H10.7947V9.66668C10.7947 8.92858 10.7798 7.97918 9.76787 7.97918C8.73811 7.97918 8.58037 8.78275 8.58037 9.61311V12.7619H6.60418V6.39882H8.50001V7.26787H8.5268C8.79168 6.76787 9.43751 6.24108 10.3988 6.24108C12.3988 6.24108 12.7708 7.55953 12.7708 9.27382V12.7619Z" fill="white"/>
                    </svg>
                    <p>LinkedIn</p>
                </div>
            </div>
        </>
    )
}

export default Info;