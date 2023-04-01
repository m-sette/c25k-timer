const SelectForm = ({ handleDayPicker }) => {
    return (
        <form>
            <select name='week' id='week' onChange={handleDayPicker}>
                <option value=''>--Choose Week and Day--</option>
                <optgroup label='Week 1'>
                    <option value='week-1-day-1'>Day 1</option>
                    <option value='week-1-day-2'>Day 2</option>
                    <option value='week-1-day-3'>Day 3</option>
                </optgroup>
                <optgroup label='Week 2'>
                    <option value='week-2-day-1'>Day 1</option>
                    <option value='week-2-day-2'>Day 2</option>
                    <option value='week-2-day-3'>Day 3</option>
                </optgroup>
                <optgroup label='Week 3'>
                    <option value='week-3-day-1'>Day 1</option>
                    <option value='week-3-day-2'>Day 2</option>
                    <option value='week-3-day-3'>Day 3</option>
                </optgroup>
                <optgroup label='Week 4'>
                    <option value='week-4-day-1'>Day 1</option>
                    <option value='week-4-day-2'>Day 2</option>
                    <option value='week-4-day-3'>Day 3</option>
                </optgroup>
                <optgroup label='Week 5'>
                    <option value='week-5-day-1'>Day 1</option>
                    <option value='week-5-day-2'>Day 2</option>
                    <option value='week-5-day-3'>Day 3</option>
                </optgroup>
                <optgroup label='Week 6'>
                    <option value='week-6-day-1'>Day 1</option>
                    <option value='week-6-day-2'>Day 2</option>
                    <option value='week-6-day-3'>Day 3</option>
                </optgroup>
                <optgroup label='Week 7'>
                    <option value='week-7-day-1'>Day 1</option>
                    <option value='week-7-day-2'>Day 2</option>
                    <option value='week-7-day-3'>Day 3</option>
                </optgroup>
                <optgroup label='Week 8'>
                    <option value='week-8-day-1'>Day 1</option>
                    <option value='week-8-day-2'>Day 2</option>
                    <option value='week-8-day-3'>Day 3</option>
                </optgroup>
                <optgroup label='Week 9'>
                    <option value='week-9-day-1'>Day 1</option>
                    <option value='week-9-day-2'>Day 2</option>
                    <option value='week-9-day-3'>Day 3</option>
                </optgroup>
            </select>
        </form>
    );
};
export default SelectForm;
