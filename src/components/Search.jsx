
import { SearchIcon } from "@icons/Icons";

export const Search = ({ handleSubmit }) => {

    const internHandleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.search?.value?.trim() || '';
        handleSubmit(value);
    }

    return (
        <>
            { /* Search */}
            <form className=" h-9 w-full max-w-72 sm:max-w-96 relative " style={{ viewTransitionName: 'search-input-form' }} onSubmit={internHandleSubmit}>
                <input

                    style={{ viewTransitionName: 'search-input' }}
                    name="search"
                    className="  border border-default-300 rounded-full h-full w-full  px-4 text-sm  bg-default-50 outline-none pr-10 "
                    type="text"
                    placeholder="Personajes, episodios o lugares..."
                />
                <button
                    style={{ viewTransitionName: 'search-input-button' }}
                    type="submit"
                    className=" group  bg-default-50 hover:bg-rickBlue  transition-colors h-[30px] p-1 w-[31px] absolute top-1/2  -translate-y-1/2 right-[1px] rounded-full flex justify-center items-center ">
                    <SearchIcon
                        className={' h-full  group-hover:stroke-default-900  stroke-default-400  '} />
                </button>
            </form>
        </>
    )
}
