

const BentoGridV1 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:grid-cols-6 text-white">
          <div className="rounded-xl md:col-span-2 md:row-span-2 bg-red-300">hh</div>

          <div className="rounded-xl md:row-span-2 bg-red-300">hh</div>

          <div className="rounded-xl md:row-span-3 lg:row-span-2 bg-red-300">cd</div>

          <div className="rounded-xl md:col-span-2 bg-red-300">dd</div>

          <div className="rounded-xl md:row-span-2 lg:col-span-2 bg-red-300">bb</div>

          <div className="rounded-xl md:col-span-2 bg-red-300">bbb</div>

          <div className="rounded-xl lg:col-span-2 bg-red-300">bbb</div>

          <div className="rounded-xl md:col-span-3 bg-red-300">bbb</div>

          <div className="rounded-xl lg:col-span-2 bg-red-300">bbbb</div>

          <div className="rounded-xl col-span-full lg:col-span-1 bg-red-300">bbbb</div>
        </div>
  )
}

export default BentoGridV1