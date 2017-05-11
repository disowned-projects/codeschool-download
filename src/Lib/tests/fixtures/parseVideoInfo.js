export const lastScriptContent =
    '$(function() {new CS.Classes.VideoManager({"autoplay":true,"autoadvance":true,"download":true,"allowHeartbeat":true,"domain":"codeschool","media":[{"title":"Running Your First Container","videoId":"3dcd00a6","poster":"https://projector.codeschool.com/videos/3dcd00a6/thumbnail?site=codeschool\u0026sso=Tg5BfycB7jBnsNsjTAj4Eba3zKOAJ3ZQoxSYv-WMsg3KueGkzNM15ztG2-uf5FAXi_xUBm6JmpgfTEuBV7ZiXCr8L7B3WrWba9YaMl15iWvQ2wBQsN6BcMDRIgkmCWbR","media":"https://projector.codeschool.com/videos/3dcd00a6/data.json?site=codeschool\u0026sso=Tg5BfycB7jBnsNsjTAj4Eba3zKOAJ3ZQoxSYv-WMsg3KueGkzNM15ztG2-uf5FAXi_xUBm6JmpgfTEuBV7ZiXCr8L7B3WrWba9YaMl15iWvQ2wBQsN6BcMDRIgkmCWbR","heartbeat":"https://projector.codeschool.com/api/v1/video_views?site=codeschool\u0026sso=Tg5BfycB7jBnsNsjTAj4Eba3zKOAJ3ZQoxSYv-WMsg3KueGkzNM15ztG2-uf5FAXi_xUBm6JmpgfTEuBV7ZiXCr8L7B3WrWba9YaMl15iWvQ2wBQsN6BcMDRIgkmCWbR"},{"title":"Automating the Creation of Custom Images","videoId":"c48c5a3","poster":"https://projector.codeschool.com/videos/c48c5a3/thumbnail?site=codeschool\u0026sso=Tg5BfycB7jBnsNsjTAj4Eba3zKOAJ3ZQoxSYv-WMsg3KueGkzNM15ztG2-uf5FAXi_xUBm6JmpgfTEuBV7ZiXCr8L7B3WrWba9YaMl15iWuiWaasT6I-v5kjNCng8TLJ","media":"https://projector.codeschool.com/videos/c48c5a3/data.json?site=codeschool\u0026sso=Tg5BfycB7jBnsNsjTAj4Eba3zKOAJ3ZQoxSYv-WMsg3KueGkzNM15ztG2-uf5FAXi_xUBm6JmpgfTEuBV7ZiXCr8L7B3WrWba9YaMl15iWuiWaasT6I-v5kjNCng8TLJ","heartbeat":"https://projector.codeschool.com/api/v1/video_views?site=codeschool\u0026sso=Tg5BfycB7jBnsNsjTAj4Eba3zKOAJ3ZQoxSYv-WMsg3KueGkzNM15ztG2-uf5FAXi_xUBm6JmpgfTEuBV7ZiXCr8L7B3WrWba9YaMl15iWuiWaasT6I-v5kjNCng8TLJ"},{"title":"Working With Data in Containers","videoId":"806baa22","poster":"https://projector.codeschool.com/videos/806baa22/thumbnail?site=codeschool\u0026sso=Tg5BfycB7jBnsNsjTAj4Eba3zKOAJ3ZQoxSYv-WMsg3KueGkzNM15ztG2-uf5FAXi_xUBm6JmpgfTEuBV7ZiXCr8L7B3WrWba9YaMl15iWvT0hYXDsZlyKknIhrgX-aK","media":"https://projector.codeschool.com/videos/806baa22/data.json?site=codeschool\u0026sso=Tg5BfycB7jBnsNsjTAj4Eba3zKOAJ3ZQoxSYv-WMsg3KueGkzNM15ztG2-uf5FAXi_xUBm6JmpgfTEuBV7ZiXCr8L7B3WrWba9YaMl15iWvT0hYXDsZlyKknIhrgX-aK","heartbeat":"https://projector.codeschool.com/api/v1/video_views?site=codeschool\u0026sso=Tg5BfycB7jBnsNsjTAj4Eba3zKOAJ3ZQoxSYv-WMsg3KueGkzNM15ztG2-uf5FAXi_xUBm6JmpgfTEuBV7ZiXCr8L7B3WrWba9YaMl15iWvT0hYXDsZlyKknIhrgX-aK"}],"modal":true,"modalId":"level-video-modal","playerId":"level-video-player","title":"Try Docker","userId":1314238,"openClass":"js-level-open","resumeVideo":false});});'

export const expectedOutput = [
    {
        downloaded: false,
        site: 'codeschool',
        sso: 'Tg5BfycB7jBnsNsjTAj4Eba3zKOAJ3ZQoxSYv-WMsg3KueGkzNM15ztG2-uf5FAXi_xUBm6JmpgfTEuBV7ZiXCr8L7B3WrWba9YaMl15iWvQ2wBQsN6BcMDRIgkmCWbR',
        title: 'Running Your First Container',
        url: 'https://projector.codeschool.com/videos/3dcd00a6.mp4?profile=480p&site=codeschool&sso=Tg5BfycB7jBnsNsjTAj4Eba3zKOAJ3ZQoxSYv-WMsg3KueGkzNM15ztG2-uf5FAXi_xUBm6JmpgfTEuBV7ZiXCr8L7B3WrWba9YaMl15iWvQ2wBQsN6BcMDRIgkmCWbR',
        videoId: '3dcd00a6',
    },
    {
        downloaded: false,
        site: 'codeschool',
        sso: 'Tg5BfycB7jBnsNsjTAj4Eba3zKOAJ3ZQoxSYv-WMsg3KueGkzNM15ztG2-uf5FAXi_xUBm6JmpgfTEuBV7ZiXCr8L7B3WrWba9YaMl15iWuiWaasT6I-v5kjNCng8TLJ',
        title: 'Automating the Creation of Custom Images',
        url: 'https://projector.codeschool.com/videos/c48c5a3.mp4?profile=480p&site=codeschool&sso=Tg5BfycB7jBnsNsjTAj4Eba3zKOAJ3ZQoxSYv-WMsg3KueGkzNM15ztG2-uf5FAXi_xUBm6JmpgfTEuBV7ZiXCr8L7B3WrWba9YaMl15iWuiWaasT6I-v5kjNCng8TLJ',
        videoId: 'c48c5a3',
    },
    {
        downloaded: false,
        site: 'codeschool',
        sso: 'Tg5BfycB7jBnsNsjTAj4Eba3zKOAJ3ZQoxSYv-WMsg3KueGkzNM15ztG2-uf5FAXi_xUBm6JmpgfTEuBV7ZiXCr8L7B3WrWba9YaMl15iWvT0hYXDsZlyKknIhrgX-aK',
        title: 'Working With Data in Containers',
        url: 'https://projector.codeschool.com/videos/806baa22.mp4?profile=480p&site=codeschool&sso=Tg5BfycB7jBnsNsjTAj4Eba3zKOAJ3ZQoxSYv-WMsg3KueGkzNM15ztG2-uf5FAXi_xUBm6JmpgfTEuBV7ZiXCr8L7B3WrWba9YaMl15iWvT0hYXDsZlyKknIhrgX-aK',
        videoId: '806baa22',
    },
]
