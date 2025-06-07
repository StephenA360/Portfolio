export function Contact() {
    async function submitForm(formData: FormData){
        "use server"
        const formFields = {
            email: formData.get("email"),
            message: formData.get("message")
        }
        console.log("formFields", formFields)
        console.log("TODO: Send these form field values to a backend")
        // No return value needed
    }
    return(
        <main className="max-w-lg mx-auto p-6 bg-white shadow-md border rounded-md">
            <div>
                <h1 className="text-2xl font-bold text-center mb-6">Contact Me!</h1>
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
                    <button type="submit" className= "text-white bg-[#1F4D4D] rounded-md p-3">
                        Send Message
                    </button>
                </form>
            </div>
        </main>
    )
}