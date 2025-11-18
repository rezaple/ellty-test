
import Button from './components/ui/Button'
import Checkbox from './components/ui/CheckBox'
import Line from './components/ui/Line'
import Row from './components/ui/Row'

function App() {

  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:items-start py-6 space-y-2 space-x-0 md:space-x-2 md:space-y-0">
        <div className="flex flex-col space-y-2 p-4 rounded-md border-dashed border-2 border-violet-400 columns-auto">
          <Button>Done</Button>
          <Button variant="active">Done</Button>
          <Button>Done</Button>
        </div>

        <div className="flex flex-col space-y-2 p-4 rounded-md border-dashed border-2 border-violet-400 col-span-2">
          <Checkbox  />
          <Checkbox checked={true} checkedstate="press" />
          <Checkbox checked={true} checkedstate="onclick" />
          <Checkbox checked={true} checkedstate="active" />
          <Checkbox checked={true} checkedstate="active_hover" />
          <Checkbox checked={true} checkedstate="active" />
          <Checkbox checked={true} checkedstate="active_hover_shadow" />
          <Checkbox checked={true} checkedstate="press" />
          <Checkbox className="border-gray-300 border" />
        </div>

        <div className="w-4/12 flex flex-col space-y-4 p-4 rounded-md border-dashed border-2 border-violet-400 col-span-2">
            <Row label="All pages" padding="custom">
                <Checkbox  />
            </Row>

            <Row label="All pages" padding="custom">
                <Checkbox checked={true} checkedstate="press" />
            </Row>

            <Row label="All pages"padding="custom" >
                <Checkbox checked={true} checkedstate="onclick" />
            </Row>

            <Row label="All pages" padding="custom">
                <Checkbox checked={true} checkedstate="active" />
            </Row>

            <Row label="All pages" padding="custom">
                <Checkbox checked={true} checkedstate="active_hover" />
            </Row>

            <Row label="All pages" padding="custom">
                <Checkbox checked={true} checkedstate="active" />
            </Row>

            <Row label="All pages" padding="custom">
                <Checkbox  checked={true} checkedstate="active_hover_shadow" />
            </Row>

            <Row label="All pages" padding="custom">
                <Checkbox  checked={true} checkedstate="press" />
            </Row>

        </div>

        <div className="flex justify-center">
          <div className="flex flex-col w-[370px] h-[326px] space-y-1 bg-white shadow rounded-md py-2 px-4">
              <Row label="All pages">
                  <Checkbox  />
              </Row>
              
              <Line />

              <Row label="Page 1">
                  <Checkbox  />
              </Row>

              <Row label="Page 2">
                  <Checkbox  />
              </Row>

              <Row label="Page 3">
                  <Checkbox  />
              </Row>

              <Row label="Page 4">
                  <Checkbox  />
              </Row>

              <Line className="mt-1 mb-5"/>

              <Button>Done</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
