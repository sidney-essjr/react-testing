export default function Application({ loading }: { loading: boolean }) {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      {!loading && (
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" name="bio" />
          </div>
          <div>
            <label htmlFor="job-location">Job location</label>
            <select name="" id="job-location">
              <option value="">Select a country</option>
              <option value="US">United States</option>
              <option value="GB">United kingdom</option>
              <option value="CA">Canada</option>
              <option value="IN">India</option>
              <option value="AU">Australia</option>
            </select>
          </div>

          <div>
            <label htmlFor="terms">
              <input type="checkbox" id="terms" /> I agree to therms and
              conditions
            </label>
          </div>

          <button>Submit</button>
        </form>
      )}
    </>
  );
}
