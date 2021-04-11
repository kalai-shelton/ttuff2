

module.exports = {
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
        container: {
          center:true,
          padding:'2rem',
          
        },
      extend: {
        backgroundImage: {
          'steelcomp-door' : "url('/images/Test1.jpg')",
          'security-door' : "url('/images/slider/TENTUFF-Security-Door.jpg')",
          'sliderimg1'  : "url('/images/slider/TENTUFF-Blocks-Burglars-and-Bugs.jpg')",
          'sliderimg2'  : "url('/images/slider/TENTUFF-Allows-Breeze-view.jpg')",
          'sliderimg3'  : "url('/images/slider/TENTUFF-Allows-Breeze-view.jpg')",
          'sliderimg4'  : "url('/images/slider/TENTUFF-Security-Door.jpg')",
          'sliderimg5'  : "url('/images/slider/TENTUFF-Allows-Breeze-view.jpg')",
          'securitybg' :"url('/images/tentuff-pts-bg.png')",
        },
        fontFamily: {
          'Montserrat': ['"Montserrat"', '"sans-serif"'],
          'Roboto': ['"Roboto"', '"sans-serif"'],
             },

             
      }
     
      
    },
    variants: {},
    plugins: [
     
    ]
  }