<template>
  <div class="wrapper">
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="index3.html" class="nav-link">Home</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">Contact</a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Navbar Search -->
      <li class="nav-item">
        <a class="nav-link" data-widget="navbar-search" href="#" role="button">
          <i class="fas fa-search"></i>
        </a>
        <div class="navbar-search-block">
          <form class="form-inline">
            <div class="input-group input-group-sm">
              <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
              <div class="input-group-append">
                
                <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>

      <!-- Messages Dropdown Menu -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-comments"></i>
          <span class="badge badge-danger navbar-badge">3</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <img src="dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Brad Diesel
                  <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">Call me whenever you can...</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <img src="dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  John Pierce
                  <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">I got your message bro</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <img src="dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Nora Silvester
                  <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">The subject goes here</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
        </div>
      </li>
      <!-- Notifications Dropdown Menu -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-bell"></i>
          <span class="badge badge-warning navbar-badge">15</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span class="dropdown-item dropdown-header">15 Notifications</span>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-envelope mr-2"></i> 4 new messages
            <span class="float-right text-muted text-sm">3 mins</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-users mr-2"></i> 8 friend requests
            <span class="float-right text-muted text-sm">12 hours</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-file mr-2"></i> 3 new reports
            <span class="float-right text-muted text-sm">2 days</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
          <i class="fas fa-expand-arrows-alt"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
          <i class="fas fa-th-large"></i>
        </a>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">E-RH</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">AssitantRH</a>
        </div>
      </div>

      <!-- SidebarSearch Form -->
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item">
           
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/tables/simple.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Variables de paie</p>
                </a>
              </li>
              
            
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>DataTables</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">DataTables</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">DataTable with minimal features & hover style</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <form v-on:submit="onSubmit">
                  <table id="example2" class="table table-bordered table-hover">
                    <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nom salarié</th>
                      <th>Prénom salarié</th>
                      <th>Variable de paie</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>1</td>
                      <td>MED ALI</td>
                      <td>Tounsi</td>
                      <td> <a class="fas fa-eye" v-on:click="OnClick(1)" data-toggle="modal" data-target="#exampleModal"></a> </td>
                    </tr>
                    <tr>  
                      <td>2</td>
                      <td>SAMI</td>
                      <td>BEN MOHAMED</td>
                      <td><a class="fas fa-eye" v-on:click="OnClick(2)" data-toggle="modal" data-target="#exampleModal"></a></td>
                    </tr>
                    </tbody>
                  
                  </table>
                  <div class="card-footer">
                  </div>
              </form>
         
                          <!-- Modal -->
              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="inputEmail4">DIGIXER SASU</label>
                            </div>
                            <div class="form-group col-md-3">
                              <label for="inputEmail4"></label>
                            </div>
                            
                            <div class="form-group col-md-3">
                              <label for="">Novembre/2022</label>
                            </div>
                          </div>                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form>
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="salary">Salaire</label>
                              <input type="salaire" class="form-control" id="inputSalary" value= "" placeholder="Salaire">
                            </div>
                            <div class="form-group col-md-6">
                              <label for="typeSalay">Type</label>
                              <select id="typeSalay" class="form-control">
                                <option selected>Brut</option>
                                <option>Net</option>
                              </select>
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="inputNom">Nom</label>
                              <input type="email" class="form-control" id="inputNom" placeholder="Nom">
                            </div>
                            <div class="form-group col-md-6">
                              <label for="inputPrenom">Prénom</label>
                              <input type="prenom" class="form-control" id="inputPrenom" placeholder="Prénom">
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="inputTotalHeures">Total des heures</label>
                            <input type="text" class="form-control" id="inputTotalHeures" placeholder="Total des heures">
                          </div>
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="inputHC">HC *</label>
                              <input type="text" class="form-control" id="inputHC">
                            </div>
                            <div class="form-group col-md-6">
                              <label for="hs">HS *</label>
                              <input type="text" class="form-control" id="inputHS">
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="inputHeuresJoursFeriee">Heures de jour férié *</label>
                              <input type="text" class="form-control" id="inputHeuresJoursFeriee">
                            </div>
                            <div class="form-group col-md-6">
                              <label for="hs">Heures de dimanche *</label>
                              <input type="text" class="form-control" id="inputHeuresDimanches">
                            </div>
                          </div>
                          <!-- CONGEE-->
                          <div class="form-row">
                            <div class="form-group col-md-4">
                              <label for="congee">Congé</label>
                              <select id="congee" class="form-control">
                                <option selected>Choose...</option>
                                <option id="CONGE_PAYEE" value="CONGE_PAYEE">Congés payés</option>
                                <option  id="CONGE_INTER"  value="CONGE_INTER">Congés intempéries</option>
                                <option id= "CONGE_SANS_SOLDE" value="CONGE_SANS_SOLDE">Congés sans soldes </option>
                              </select>
                            </div>
                            <div class="form-group col-md-4">
                              <label for="inputDu">Du</label>
                              <input type="text" class="form-control" id="inputDu">
                            </div>
                            <div class="form-group col-md-4">
                              <label for="inputAu">Au</label>
                              <input type="text" class="form-control" id="inputAu">
                            </div>
                          </div>
                              <!-- ABSENCES-->
                          <div class="form-row">
                            <div class="form-group col-md-4">
                              <label for="absence">Absence</label>
                              <select id="absence" class="form-control">
                                <option selected>Choose...</option>
                                <option value="MAT">Maternité</option>
                                <option value="ACC_TRAV">Accident de travail</option>
                                <option value="MALAD_NON_PRO">Maladie non professionnelle</option>
                                <option value="MALAD_PRO">Maladie Professionnell</option>
                                <option value="AUTRES">Autres absences</option>
                              </select>
                            </div>
                            <div class="form-group col-md-4">
                              <label for="inputDuAbsence">Du</label>
                              <input type="text" class="form-control" id="inputDuAbsence">
                            </div>
                            <div class="form-group col-md-4">
                              <label for="inputAuAbsence">Au</label>
                              <input type="text" class="form-control" id="inputAuAbsence">
                            </div>
                          </div>
                            <!-- AUTRES-->
                            <div class="form-row">
                              <div class="form-group col-md-4">
                                <label for="inputAcomptes">Acomptes</label>
                                <input type="text" class="form-control" id="inputAcomptes">
                              </div>
                              <div class="form-group col-md-4">
                                <label for="autresPrimes">Autres primes</label>
                                <input type="text" class="form-control" id="inputAutresPrimes">
                              </div>
                              <div class="form-group col-md-4">
                                <label for="indeminiteRepas">Indemnité repas</label>
                                <input type="text" class="form-control" id="inputIndeminiteRepas">
                              </div>
                            </div>   
                        
                          <div class="form-group">
                            <label for="autresVar">Autres variables :</label>
                            <input type="text" class="form-control" id="inputAutresVar" placeholder="Autres variales">
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" v-on:click="onSubmit()">Save changes</button>
                          </div>
                        </form>
                    </div>
                    
                  </div>
                </div>
              </div>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->

  <!-- Main Footer -->
  <footer class="main-footer">
    <strong>Copyright &copy; 2014-2021 <a href="#">e-RH</a>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version</b> 1.0.0
    </div>
  </footer>
</div>
 
</template>

<script>
import EmployeeDataService from "../services/EmployeeDataService";

 export default {
  name: "PayrollVariableEmployeeForm",
  data() {
    return {
      accountUser: {
        nameUser: null,
        title: "",
        description: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {

    OnClick(employeeId) {

      var inputSalary = document.getElementById("inputSalary");
      var inputNom = document.getElementById("inputNom");
      var inputPrenom = document.getElementById("inputPrenom");
      var inputHC = document.getElementById("inputHC");
      var inputHS = document.getElementById("inputHS");
      var inputJoursFeriee = document.getElementById("inputJoursFeriee");
      var inputHeuresDimanches = document.getElementById("inputHeuresDimanches");
      var congee = document.getElementById("congee");
      var absence = document.getElementById("absence");
      var inputDu = document.getElementById("inputDu");
      var inputAu = document.getElementById("inputAu");
      var inputDuAbsence = document.getElementById("inputDuAbsence");
      var inputAuAbsence = document.getElementById("inputAuAbsence");
      var inputAcomptes = document.getElementById("inputAcomptes");
      var inputAutresPrimes = document.getElementById("inputAutresPrimes");
      var inputIndeminiteRepas = document.getElementById("inputIndeminiteRepas");
      var inputAutresVar = document.getElementById("inputAutresVar");
      var select = document.querySelector('#congee');
     //const option = select.querySelector('#myId');
     



      /*var inputCompany = document.getElementById("company");
      var monthYear = document.getElementById("monthYear");
      var todayDate = new Date().toISOString().slice(0, 10);
      var dateTab = todayDate.split('-');
      monthYear.value = dateTab[1]+"/"+dateTab[0];
      inputCompany.value = "DIGIXER SASU";*/
      // model api
   
     /*var position = {
        name: null,
        status: null
      }

      var reason = {
        category: null
      }
      var Absence = {
        type: null,
        status: null,
        startDate: null,
        endDate: null,
        totalDays: null,
        reason: {
          category: null
        }

      }*/
      /*var AbsenceList = new Array();
      AbsenceList[0] = Absence;
      var salaryAdvanceList = new Array();
      contract = {
        contractType: null,
        startDate: null,
        endDate,
        position: null
      }
      var convention = {
        name: null
      }
      var convention = {
        name: null
      }
      var company = {
        name: null,
        convention: null
      }
      var salary = {
        type: null,
        amount: null
      }
      var employee = {
        
      }*/
     
    


      switch(employeeId){
        case 1:
            inputSalary.value = "3500";
            inputNom.value = "MED ALI";
            inputPrenom.value = "Tounssi";
            inputHC.value = "38";
            inputHS.value = "45";
            inputAcomptes.value = "600";
            inputAutresPrimes.value = "0";
            inputHeuresDimanches.value = "0";
            inputJoursFeriee.value = "0";
            inputAutresVar.value = "0";
            select.value="CONGE_PAYEE";
            inputDu.value="10/11/2022";
            inputAu.value="12/11/2022";
            absence.value="MALAD_PRO";
            inputDuAbsence.value="15/11/2022";
            inputAuAbsence.value="16/11/2022";
            inputIndeminiteRepas.value ="21 * 5.5";
            inputAutresVar.value = "0";

          break;
        case 2:
            inputSalary.value = "2500";
            inputNom.value = "SAMI";
            inputPrenom.value = "BEN MOHAMED";
            inputHC.value = "0";
            inputHS.value = "0";
            inputAcomptes.value = "0";
            inputAutresPrimes.value = "0";
            inputHeuresDimanches.value = "0";
            inputJoursFeriee.value = "0";
            inputAutresVar.value = "0";
            congee.value="CONGE_PAYEE";
            inputDu.value="10/11/2022";
            inputAu.value="11/11/2022";
            absence.value="MALAD_PRO";
            inputDuAbsence.value="15/11/2022";
            inputAuAbsence.value="16/11/2022";
            inputIndeminiteRepas.value ="21 * 5.5";
            inputAutresVar.value = "0";
        //inputSalary.value = "2300";
          break;
        default:
      }
      inputSalary.value = "";
      inputNom.value = "";
      inputPrenom.value = "";
      inputHC.value = "";
      inputHS.value = "";
      inputAcomptes.value = "";
      inputAutresPrimes.value = "";
      inputHeuresDimanches.value = "";
      inputJoursFeriee.value = "";
      inputAutresVar.value = "";
      select.value="";
      inputDu.value="";
      inputAu.value="";
      absence.value="";
      inputDuAbsence.value="";
      inputAuAbsence.value="";
      inputIndeminiteRepas.value ="";
      inputAutresVar.value = "";
    },  
    onSubmit(){

      alert("submit");
     // var table = document.getElementsByTagName('table')[0].getElementsByTagName('tr')[1].cells[2].innerHTML;
 
   /* var table = document.getElementsByTagName("table")[0]; //first table
    var rows = table.rows; 

    var rowText = rows[1].cells[1].innerHTML;
    var cellsLength = rows[1].cells.length;
    alert("rowText = " +rowText);
    alert("cells = " +cellsLength);
    alert("rows = " +rows.length);
    
    for(var i=1; i <= rows.length; i++){
      //for(var i=1; i <= rows.length; i++){
     //   var rowText = rows[1].cells[1].innerHTML;

      //}
    }
*/
    var parrollVariableObject1 =  {
                  totalHours: "151",
                  employee: {
                    firstName: "MED ALI",
                    lastName: "TOUNSI",
                    gender: "M",
                    salary: 4000,
                    companyName: "DIGIXER SASU",
                    conventionName: "Syntec",
                    salaryAdvance: 600,
                    AddtionalHours: 6,
                    extraHours: 5,
                    overtime: 50,
                    mealAllowance: "21.5 * 5.5",
                    transport: 75,
                    bonus: 300,
                    absences: [
                      {
                        type: "congé",
                        startDate: "01/10/2022",
                        endDate: "02/10/2022",
                        reason: "DEMENAGEMENT"
                      }
                    ]
                  }
                };
    var parrollVariableObject2 =  {
      totalHours: "100",
      employee: {
        firstName: "SAMI",
        lastName: "BEN MOHAMED",
        gender: "M",
        salary: 4000,
        companyName: "DIGIXER SASU",
        conventionName: "Syntec",
        salaryAdvance: 0,
        AddtionalHours: 0,
        extraHours: 3,
        overtime: 25,
        mealAllowance: "18 * 5.5",
        transport: 75,
        bonus: 0,
        absences: [
          {
            type: "absence",
            startDate: "01/10/2022",
            endDate: "03/10/2022",
            reason: "ARRET MALADIE"
          }
        ]
      }
    };
   // const payrollvariablesList = new Array(parrollVariableObject1,parrollVariableObject2); 
    var data = {
              month: "October",
              year: "2022",
              payrollvariables: [parrollVariableObject1, parrollVariableObject2]
            };
      EmployeeDataService.savePayrollVariables(data)
        .then(response => {
          alert(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }  
  }
};
</script>


