const KusamaIndexing = () => {
  return (
    <div className="mt-2 ml-2 flex flex-col">

      <h1 className="text-3xl"> Kusama treasury indexer</h1>

      <input
        type="text"
        placeholder="Find a contract"
        className="
             w-80
             mt-8 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500
               "
      />

        <div className="mt-8">
            <label className="text-xl">Proposal Info</label>
            <div className="mt-2 ml-2 mb-4">
            <p>Account:</p>
            <p>Date Created:</p>
            <p>Description:</p>
            </div>

            <label className="mt-5 text-xl">Status</label>
            <div className="mt-2 ml-2 mb-4">
            <p> Add status state here</p>
            </div>

            <label className="mt-5 text-xl">Refered Track</label>
            <div className="mt-2 ml-2">
            <p> Amount: </p>
            <p> Decision period:</p>
            <p> Confirmation period: </p>
            </div>
        </div>

    </div>
  );
};

export default KusamaIndexing;
