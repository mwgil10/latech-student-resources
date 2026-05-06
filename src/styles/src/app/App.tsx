import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/Tabs';
import { RegistrationResources } from './components/RegistrationResources';
import { ProcedureResources } from './components/ProcedureResources';
import { ProgramNavigation } from './components/ProgramNavigation';
import { AcademicSupport } from './components/AcademicSupport';
import { GraduationCap, BookOpen, Map, LifeBuoy } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="mb-2">Louisiana Tech Student Resources</h1>
          <p className="text-primary-foreground/80">Navigate your academic journey with confidence</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <Tabs defaultValue="registration" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="registration" className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Registration</span>
            </TabsTrigger>
            <TabsTrigger value="procedures" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Procedures</span>
            </TabsTrigger>
            <TabsTrigger value="navigation" className="flex items-center gap-2">
              <Map className="w-4 h-4" />
              <span>Program Navigation</span>
            </TabsTrigger>
            <TabsTrigger value="support" className="flex items-center gap-2">
              <LifeBuoy className="w-4 h-4" />
              <span>Academic Support</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="registration">
            <RegistrationResources />
          </TabsContent>

          <TabsContent value="procedures">
            <ProcedureResources />
          </TabsContent>

          <TabsContent value="navigation">
            <ProgramNavigation />
          </TabsContent>

          <TabsContent value="support">
            <AcademicSupport />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-muted mt-16 px-6 py-6">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>Louisiana Tech University • Questions? Contact Student Services</p>
        </div>
      </footer>
    </div>
  );
}
