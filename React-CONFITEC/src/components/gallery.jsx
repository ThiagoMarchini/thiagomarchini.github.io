export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Galeria</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                    <div className='hover-text'>
                      <h4>Infraestrutura</h4>
                    </div>
                    <img
                      src='img/portfolio/10.jpg'
                      className='img-responsive galeria'
                      alt='Project Title'
                    />{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                    <div className='hover-text'>
                      <h4>Troca de Segredo</h4>
                    </div>
                    <img
                      src='img/portfolio/11.jpg'
                      className='img-responsive galeria'
                      alt='Project Title'
                    />{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                    <div className='hover-text'>
                      <h4>Manutenção de Cofres</h4>
                    </div>
                    <img
                      src='img/portfolio/12.jpg'
                      className='img-responsive galeria'
                      alt='Project Title'
                    />{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                    <div className='hover-text'>
                      <h4>Manutenção de Cofres</h4>
                    </div>
                    <img
                      src='img/portfolio/13.jpg'
                      className='img-responsive galeria'
                      alt='Project Title'
                    />{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                    <div className='hover-text'>
                      <h4>Manutenção de Cofres</h4>
                    </div>
                    <img
                      src='img/portfolio/14.jpg'
                      className='img-responsive galeria'
                      alt='Project Title'
                    />{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                    <div className='hover-text'>
                      <h4>Manutenção de ATM</h4>
                    </div>
                    <img
                      src='img/portfolio/15.jpg'
                      className='img-responsive galeria'
                      alt='Project Title'
                    />{' '}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
