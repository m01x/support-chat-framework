import React from 'react'

const NoChatSelectedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-8xl mb-4">
        👻
        <span className="relative">
          <span className="absolute top-1/2 left-1/4 transform -translate-y-1/2 text-xl font-bold"></span>
          <span className="absolute top-1/2 right-1/4 transform -translate-y-1/2 text-xl font-bold"></span>
        </span>
      </div>
      <h1 className="text-3xl font-light mb-2">Booh!~</h1>
      <p className="text-muted-foreground">No has seleccionado ningún chat</p>
    </div>
  )
}

export default NoChatSelectedPage;
