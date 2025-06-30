export function Contact() {
    async function submitForm(formData: FormData){
        "use server"
        const formFields = {
            email: formData.get("email"),
            message: formData.get("message")
        }
        console.log("formFields", formFields)
        
    }
    return(
        <main className="max-w-lg mx-auto p-5 text-[#1F4D4D] bg-white shadow-md border-2 rounded-md">
            <div>
                <h1 className="text-2xl text-center mb-6 font-bold">Contact Me!</h1>
                <form className="space-y-4" action={submitForm}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray 700">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            className="focus:ring-2 focus:ring-[#1F4D4D] focus:border-[#1F4D4D] border-gray-400 border-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray 700">Message</label>
                        <textarea id="message" required name="message" rows={4} className="focus:ring-2 focus:ring-[#1F4D4D] focus:border-[#1F4D4D] border-gray-400 border-2 w-100"></textarea>
                    </div>
                    <button type="submit" className= "text-[#1F4D4D] bg-white border-1 border-[#1F4D4D] rounded-md p-3 hover:text-[#ECFAE5] hover:bg-[#1F4D4D] ease-in-out duration-300">
                        Send Message
                    </button>
                </form>
            </div>
        </main>
    )
}