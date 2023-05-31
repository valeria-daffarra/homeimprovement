import React from 'react'
import 'photoswipe/dist/photoswipe.css'
import type { DataSourceArray } from 'photoswipe'
import { Gallery, Item, GalleryProps } from 'react-photoswipe-gallery'

React.useLayoutEffect = React.useEffect 


export function Carousel() {
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '20%',
    maxHeight: '100%',
    aspectRatio: '4/3',
    borderRadius: '5%',
    marginBottom: '1rem'
  }

  const uiElements: GalleryProps['uiElements'] = [
    {
      name: 'bulletsIndicator',
      order: 9,
      isButton: false,
      appendTo: 'wrapper',
      onInit: (el, pswpInstance) => {
        let prevIndex = -1
        const thumbnails: HTMLElement[] = []

        /* eslint-disable no-param-reassign */
        el.style.position = 'absolute'
        el.style.bottom = '20px'
        el.style.left = '10px'
        el.style.right = '0'
        el.style.display = 'grid'
        el.style.gridGap = '10px'
        el.style.gridTemplateColumns = 'repeat(auto-fit, 40px)'
        el.style.gridTemplateRows = 'repeat(auto-fit, 40px)'
        el.style.justifyContent = 'center'
        /* eslint-enable no-param-reassign */

        const dataSource = pswpInstance.options.dataSource as DataSourceArray

        for (let i = 0; i < dataSource.length; i++) {
          const slideData = dataSource[i]

          const thumbnail = document.createElement('div')
          thumbnail.style.transition = 'transform 0.15s ease-in'
          thumbnail.style.opacity = '0.6'
          thumbnail.style.cursor = 'pointer'
          thumbnail.onclick = (e: MouseEvent) => {
            const target = e.target as HTMLImageElement | HTMLDivElement
            const thumbnailEl =
              target.tagName === 'IMG'
                ? target.parentElement
                : (e.target as HTMLImageElement | HTMLDivElement)
            if (thumbnailEl) {
              pswpInstance.goTo(thumbnails.indexOf(thumbnailEl))
            }
          }

          const thumbnailImage = document.createElement('img')
          thumbnailImage.setAttribute('src', slideData.msrc || '')
          thumbnailImage.style.width = '100%'
          thumbnailImage.style.height = '100%'
          thumbnailImage.style.objectFit = 'cover'

          thumbnail.appendChild(thumbnailImage)

          el.appendChild(thumbnail)

          thumbnails.push(thumbnail)
        }

        pswpInstance.on('change', () => {
          if (prevIndex >= 0) {
            const prevThumbnail = thumbnails[prevIndex]
            prevThumbnail.style.opacity = '0.6'
            prevThumbnail.style.cursor = 'pointer'
            prevThumbnail.style.transform = 'scale(1)'
          }

          const currentThumbnail = thumbnails[pswpInstance.currIndex]
          currentThumbnail.style.opacity = '1'
          currentThumbnail.style.cursor = 'unset'
          currentThumbnail.style.transform = 'scale(1.2)'

          prevIndex = pswpInstance.currIndex
        })
      },
    },
  ]

  return (
    <>
    <div className="flex justify-center w-full m-auto ">
        <Gallery uiElements={uiElements}>
        <div className='flex flex-wrap gap-0.5 justify-center'
        >
            <Item
            original="https://res.cloudinary.com/dwpxbyawm/image/upload/v1685463576/MR%20GLAZIER%20NYC/marvin-windows_u6tntm.jpg"
            thumbnail="https://res.cloudinary.com/dwpxbyawm/image/upload/v1685463576/MR%20GLAZIER%20NYC/marvin-windows_u6tntm.jpg"
            width="1600"
            height="1068"
            alt="Window Installation"
            >
            {({ ref, open }) => (
                <img
                style={smallItemStyles}
                src="https://res.cloudinary.com/dwpxbyawm/image/upload/v1685463576/MR%20GLAZIER%20NYC/marvin-windows_u6tntm.jpg"
                ref={ref as React.MutableRefObject<HTMLImageElement>}
                onClick={open}
                />
            )}
            </Item>
            <Item
            original="https://res.cloudinary.com/dwpxbyawm/image/upload/v1685463577/MR%20GLAZIER%20NYC/frameless-showerdoor_pdbsms.jpg"
            thumbnail="https://res.cloudinary.com/dwpxbyawm/image/upload/v1685463577/MR%20GLAZIER%20NYC/frameless-showerdoor_pdbsms.jpg"
            width="1600"
            height="1068"
            alt="Shower Door"
            >
            {({ ref, open }) => (
                <img
                style={smallItemStyles}
                src="https://res.cloudinary.com/dwpxbyawm/image/upload/v1685463577/MR%20GLAZIER%20NYC/frameless-showerdoor_pdbsms.jpg"
                ref={ref as React.MutableRefObject<HTMLImageElement>}
                onClick={open}
                />
            )}
            </Item>
            <Item
            original="https://res.cloudinary.com/dwpxbyawm/image/upload/v1685463576/MR%20GLAZIER%20NYC/image-skylight_rz2vnu.webp"
            thumbnail="https://res.cloudinary.com/dwpxbyawm/image/upload/v1685463576/MR%20GLAZIER%20NYC/image-skylight_rz2vnu.webp"
            width="1600"
            height="1066"
            alt="Skylight Window"
            >
            {({ ref, open }) => (
                <img
                style={smallItemStyles}
                src="https://res.cloudinary.com/dwpxbyawm/image/upload/v1685463576/MR%20GLAZIER%20NYC/image-skylight_rz2vnu.webp"
                ref={ref as React.MutableRefObject<HTMLImageElement>}
                onClick={open}
                />
            )}
            </Item>
            <Item
            original="https://res.cloudinary.com/dwpxbyawm/image/upload/v1685463577/MR%20GLAZIER%20NYC/porch-door_sqp4vn.jpg"
            thumbnail="https://res.cloudinary.com/dwpxbyawm/image/upload/v1685463577/MR%20GLAZIER%20NYC/porch-door_sqp4vn.jpg"
            width="1600"
            height="1066"
            alt="Door Installation"
            >
            {({ ref, open }) => (
                <img
                style={{ ...smallItemStyles, gridColumnStart: 2 }}
                src="https://res.cloudinary.com/dwpxbyawm/image/upload/v1685463577/MR%20GLAZIER%20NYC/porch-door_sqp4vn.jpg"
                ref={ref as React.MutableRefObject<HTMLImageElement>}
                onClick={open}
                />
            )}
            </Item>
        </div>
        </Gallery>
     </div>
    </>
  )
}

